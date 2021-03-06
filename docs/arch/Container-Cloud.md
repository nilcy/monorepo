# コンテナ

```plantuml:images_Container-Cloud
@startuml
skinparam monochrome true
skinparam handwritten false
skinparam defaultFontName "Yu Gothic UI, sans-serif"
left to right direction
actor User
boundary Frontend
control BFF
control Service1
control Service2
control Service3
User -- Frontend
Frontend -- BFF
BFF -- Service1
BFF -- Service2
BFF -- Service3
@enduml
```

![](./images_Container-Cloud.svg)

## AWS

```plantuml:images_Container-Cloud_aws
@startuml
skinparam monochrome true
skinparam handwritten false
skinparam defaultFontName "Yu Gothic UI, sans-serif"
left to right direction
actor User
boundary Amplify
control AppSync
control ElasticBeanstalk1
control ElasticBeanstalk2
control ElasticBeanstalk3
User -- Amplify : React
Amplify -- AppSync : GraphQL
AppSync -- ElasticBeanstalk1 : REST
AppSync -- ElasticBeanstalk2 : Lambda
AppSync -- ElasticBeanstalk3 : Step Functions
@enduml
```

![](./images_Container-Cloud_aws.svg)

## Azure

```plantuml:images_Container-Cloud_azure
@startuml
skinparam monochrome true
skinparam handwritten false
skinparam defaultFontName "Yu Gothic UI, sans-serif"
left to right direction
actor User
boundary MobileApps
control AppService
control AppService1
control AppService2
control AppService3
User -- MobileApps : React
MobileApps -- AppService : GraphQL
AppService -- AppService1 : REST
AppService -- AppService2 : Functions
AppService -- AppService3 : Logic Apps
@enduml
```

![](./images_Container-Cloud_azure.svg)

## GCP

```plantuml:images_Container-Cloud_gcp
@startuml
skinparam monochrome true
skinparam handwritten false
skinparam defaultFontName "Yu Gothic UI, sans-serif"
left to right direction
actor User
boundary Firebase
control AppEngine
control AppEngine1
control AppEngine2
control AppEngine3
User -- Firebase : React
Firebase -- AppEngine : GraphQL
AppEngine -- AppEngine1 : REST
AppEngine -- AppEngine2 : Functions
AppEngine -- AppEngine3 : Workflow
@enduml
```

![](./images_Container-Cloud_gcp.svg)
