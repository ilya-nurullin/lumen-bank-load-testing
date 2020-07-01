/*
 * Copyright 2011-2019 GatlingCorp (https://gatling.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package bank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class TransactionsSimulation extends Simulation {
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

  val scn = scenario("Transactions") // A scenario is a chain of requests and pauses
    .feed(orderRefs)
    .exec(
      http("Transaction")
      .post("/bank/transaction")
      .body(StringBody("""{ "from": "${accountNumber}", "to": "${to}", "amount": "1.17" }""")).asJson
    )

  setUp(scn.inject(
    atOnceUsers(10),
    rampUsers(10) during (5 seconds),
    constantUsersPerSec(150) during (20 seconds)
  ).protocols(httpProtocol))
}
