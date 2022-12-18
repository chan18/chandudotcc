Title: What is FaaS
Description:
Published: 09 January 2021
Lead: A introduction to FaaS
Tags: faas
IsPost: true
By: Chandra kanth
ImageUrl: https://i.imgur.com/YCXUF2s.png
---

# What is serverless cloud computing ?
In simple terms serverless computing is bit sided code, unit of discrete components which does one thing in one fine life span. All the responsibilities are delegated to the service provider. Like amazon aws and microsoft azure.

Responsibilities like choosing an operating system, Capacity management and planning, scaling and reliability of the server anything that breaks this responsibility by the vendor is not fully serverless. 

We are only responsible for maintaining the code.  Developer is no longer involved in hosting the web-app/code online ( server/cloud) no Need to maintain the computing resources like Server, RAM, CPU or any hardware infrastructure.

**Example**,  let's talk about Azure function or AWS Lambda. As developers, we no longer have to think about which OS or language to use, deployment, and scaling with fault tolerance, logs, updates, metrics, etc. All of this is taken care of by the vendor. In this case, Microsoft or Amazon. We simply outsource these responsibilities to them.

> "**According to wikipedia**  Serverless computing is a cloud computing execution model in which the cloud provider allocates machine resources on demand, taking care of the servers on behalf of the their customers. 
Pricing is based on the actual amount of resources consumed by an application , However developers of serverless applications are not concerned with capacity planning, configuration, management, maintenance, operating or scaling of containers, VMs, or physical servers."

# Which vendors are providing serverless cloud computing?

## [AWS Lambda](https://aws.amazon.com/lambda/):

<a href="https://imgur.com/DnUvQLc"><img src="https://i.imgur.com/DnUvQLc.png" title="source: imgur.com" /></a>

 *supported languages* node, **java, C#, python**. [Triggers kinesis](https://learn.lytics.com/documentation/product/integrations/aws/aws-kinesis/kinesis-triggers), [Amazon DynamoDB](https://aws.amazon.com/dynamodb/), [SQS](https://aws.amazon.com/sqs/), [Amazon S3](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-property-function-s3.html), [CloudWatch](https://aws.amazon.com/blogs/aws/building-serverless-pipelines-with-amazon-cloudwatch-events/),[Cognito](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-property-function-cognito.html), [Config](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html), [lex](https://aws.amazon.com/lex/). Known features dynamic scaling, Cross AZ, Custom runtimes, HTTP via API GateWay, Workflow with step functions, Extensible layers.

 ***
 ## [Azure functions](https://docs.microsoft.com/en-us/azure/azure-functions/):

 <a href="https://imgur.com/YCXUF2s"><img src="https://imgur.com/YCXUF2s.png" title="source: imgur.com" /></a>

 *supported languages* **C#, F#, Java, Node**. [Azure Triggers Blob](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-trigger?tabs=csharp), [Azure Cosmos DB](https://azure.microsoft.com/en-us/services/cosmos-db/), [Azure Event Grid](https://azure.microsoft.com/en-us/services/event-grid/), [Azure Event Hubs](https://azure.microsoft.com/en-us/services/event-hubs/), [Azure HTTP triggers](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=csharp), [Azure Service Bus](https://azure.microsoft.com/en-us/services/service-bus/), [Time Triggers](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer?tabs=csharp).

 ***
## [Google Cloud](https://cloud.google.com/serverless/):

<a href="https://imgur.com/4UkBSLd"><img src="https://imgur.com/4UkBSLd.png" title="source: imgur.com" /></a>

 *Supported Languages*. **Node, python, GO** Available [triggers](https://cloud.google.com/functions/docs/calling/http) HTTP, [pub/sub](https://cloud.google.com/pubsub/), Storage, [FireStore](https://cloud.google.com/firestore/), [Firebase](https://firebase.google.com/), Scheduler Features to know Auto Scaled with “max” option,  Version draining,  Function can run under unique identities

 ***
## Cloudflare

Supported languages **Javascript, webassembly** Available triggers HTTP Features to know Deploy to 160+ edge data centers, Respond in milliseconds, Workers kv for close data.

 ***
## Installable FaaS

  If your enterprise can effort a data center then consider this  opens source FaaS platforms  Knative, Apache openwhisk, Kubeless, Pivotal function service, IBM cloud private, GitLab

# How much does it cost? Do you need serverless?
Cost estimation for your serverless function add in the requirement and it will estimate a cost for you.
 [serverlesscalc.com](http://serverlesscalc.com), If you think you need a serverless services? Should your webapp should be a serverless? Then you can check that with the below link. [servers.lol](https://servers.lol).

