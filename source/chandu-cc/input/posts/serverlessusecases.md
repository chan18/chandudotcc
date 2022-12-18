Title: Serverless-FaaS use cases
Published: 16 January 2021
Lead: Serverless use cases
Tags: faas use cases
IsPost: true
ImageUrl: https://i.imgur.com/MP9vnnz.png
By: Chandra kanth
---

# Serverless UseCases.
##  some Use cases of serverless computing.

**Batch processing** an offline system, Batch processing takes a large amount of data at once and runs a bunch of jobs on it, In this scenario usually, the user will not wait for any sort of response back from the server, Jobs are scheduled and run in periodically Maybe we replace expanse on extract-transform-load(ETL)

<a href="https://imgur.com/H65RZ70"><img src="https://i.imgur.com/H65RZ70.png" title="source: imgur.com" /></a>

**Infrastructure automation** IT-ops can automate scheduled jobs, monitor network changes, use triggers  and events for verse different systems.

<a href="https://imgur.com/UQdm3lQ"><img src="https://i.imgur.com/UQdm3lQ.png" title="source: imgur.com" /></a>

**Stream processing** an online/offline system, it is also called nearline processing. just like batch processing system, stream processing takes input and produces output. But stream processing works on events where batch processing. Stream processing builds upon batch jobs.

Today we use serverless managed services that process event streams since functions typically stateless in many platforms we can't do windowing and operations like that. There are great managed services for stream processing today in the cloud that require no infrastructure. No complexity.

<a href="https://imgur.com/MP9vnnz"><img src="https://i.imgur.com/MP9vnnz.png" title="source: imgur.com" /></a>

**3 - tier web apps** or often SPA or sites that talk to serverless storage. Only invoked and run when someone uses it. a typical 3 tier web app

<a href="https://imgur.com/SrvMjnk"><img src="https://i.imgur.com/SrvMjnk.png" title="source: imgur.com" /></a>

**Web APIs** are a great option, easy to build web api  data and query systems and do simple calculations, release and deploy without setting up any infrastructure.

<a href="https://imgur.com/up5275z"><img src="https://i.imgur.com/up5275z.png" title="source: imgur.com" /></a>

AI and machine learning Data crunching, just like stream and batch processing.

### Further reading

**Azure Serverless** [business senarios](https://docs.microsoft.com/en-us/dotnet/architecture/serverless/serverless-business-scenarios).

**Amazon AWS** [step functions](https://docs.aws.amazon.com/lambda/latest/dg/stepfunctions-patterns.html),
 [lambda services](https://docs.aws.amazon.com/lambda/latest/dg/lambda-services.html)

**Google Cloud** [functions](https://cloud.google.com/functions/#section-6)

## summary
serverless functions are cheap and useful they have many use cases, Even though they are stateless and has a cold start time, The technology is still getting maturing at the time of this blog is published. Amazon is adding a lot of research on this area.