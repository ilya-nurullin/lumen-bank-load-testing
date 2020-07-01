package bank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class BalanceSimulation extends Simulation {
  val orderRefs = Iterator.continually(
    Map(
      "accountNumber" -> (Random.nextInt(3000)+1), 
      "nextAccountNumber" -> (Random.nextInt(Int.MaxValue - 10000)+10000),
      "to" -> (Random.nextInt(3000)+1)
    )
  )

  val httpProtocol = http
    .baseUrl("https://bank-load.herokuapp.com/") // Here is the root for all relative URLs
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // Here are the common headers
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  val scn = scenario("Balance") // A scenario is a chain of requests and pauses
    .feed(orderRefs)
    .exec(
      http("Get Balance")
      .get("/bank/${accountNumber}/balance")
    )


  setUp(scn.inject(
    atOnceUsers(10),
    rampUsers(10) during (5 seconds),
    constantUsersPerSec(300) during (20 seconds)
  ).protocols(httpProtocol))
}
