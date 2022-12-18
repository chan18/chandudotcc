Title: Azure management and governance
Description: Describe Azure management and governance
Lead: AZ-900
Tags: [Azure,AZ-900]
IsPost: false
Image: 
By: Chandra kanth
Published: 
---

# AZ-900

Describe Azure management and governance(30-35%)

Describe cost management in Azure  
Describe factors that can affect costs in Azure.  
 Compare the Pricing calculator and the Total Cost of Ownership (TCO) calculator  
Describe the Azure Cost Management and Billing tool.  
 Describe the purpose of tags.  
Describe features and tools in Azure for governance and compliance  
• Describe the purpose of Azure Blueprints.  
• Describe the purpose of Azure Policy.  
• Describe the purpose of resource locks.  
• Describe the purpose of the Service Trust Portal.  
Service Trust Portal Home Page (microsoft.com)  
Describe features and tools for managing and deploying Azure resources  
• Describe the Azure portal.  
• Describe Azure Cloud Shell, including Azure CLI and Azure PowerShell.  
• Describe the purpose of Azure Arc.  
• Describe Azure Resource Manager and Azure Resource Manager templates (ARM templates).  
Describe monitoring tools in Azure  
• Describe the purpose of Azure Advisor.  
• Describe Azure Service Health.  
• Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Application Insights.  


# Describe Microsoft Cost Management and service level agreements
## Compare costs by using the Total Cost of Ownership Calculator
what is TCO calculator?   
The [TCO Calculator](https://azure.microsoft.com/pricing/tco/calculator) **helps you estimate** the **cost savings** of **operating your solution on Azure**  **over time compared** to **operating** in **your on-premises datacenter.**  
The **term *total cost of ownership*** is used commonly in finance.  It can be **hard** to see **all the hidden costs** related to **operating** a  technology capability **on-premises**. **Software licenses** and **hardware** are **additional costs.**  

## Choose the right Azure services by examining SLAs and service lifecycle
- **What are service-level agreements (SLAs)**
    - **Service credits**        
        A ***service credit***  is the percentage of the fees you paid that are credited back        
    - **SLA**        
        [https://azure.microsoft.com/en-us/support/legal/sla/](https://azure.microsoft.com/en-us/support/legal/sla/)        

        | SLA percentage | Downtime per week | Downtime per month | Downtime per year |  
        | --- | --- | --- | --- |  
        | 99 | I .68 hours | 7.2 hours | 3.65 days |  
        | 99.9 | 10.1 minutes | 43.2 minutes | 8.76 hours |  
        | 9995 | 5 minutes | 21.6 minutes | 4.38 hours |  
        | 99.99 | 1.01 minutes | 4.32 minutes | 52.56 minutes |  
        | 99.999 | 6 seconds | 25.9 seconds | 5.26 minutes |  
        

# Describe features and tools in Azure for governance and compliance
## Describe the purpose of **Azure Blueprints**
- Azure Blueprints lets you **standardize** cloud **subscription** or **environment** deployments.
- Azure Blueprints you can define **repeatable** settings and **policies** that are applied as **new subscriptions** are created
- Azure Blueprints lets you deploy a new **Test**/**Dev** environment with **security** and **compliance settings** already configured.
- Each component in the blueprint definition is known as an artifact.
    - Role assignments
    - Policy assignments
    - Azure Resource Manager templates
    - Resource groups
- Azure creates a record that associates a resource with the blueprint that defines it. This connection helps you track and audit your deployments.

## Describe the purpose of **Azure Policy**
- How do you ensure that your resources stay compliant?
    - Can you be alerted if a resource's configuration has changed?
    - An Azure Policy initiative is a way of grouping related policies together.
    - **Azure Policy**        
        Azure Policy enables you to define both individual policies and groups of related policies, known as **initiatives**        
        Use Cases :        
        - Implementing governance for resource consistency
        - regulatory compliance
        - security
        - cost
        - Management

## A resource lock prevents resources from being accidentally deleted or changed.

| Lock Types | Read | Update | Delete |
| --- | --- | --- | --- |
| CanNotDelete | Yes | Yes | No |
| ReadOnly | Yes | No | No |

## Describe the purpose of the **Service Trust portal**    
The Microsoft Service Trust Portal is a portal that provides access to various content, tools, and other resources about Microsoft security, privacy, and compliance practices.

# Describe features and tools for managing and deploying Azure resources
## Describe Azure portal
- Interacting with azure
    - Azure portal
    - Azure PowerShell
    - Azure Command Line Interface (CLI)
## Describe Azure **Cloud Shell**, including **Azure CLI** and Azure **PowerShell**
- Azure **CLI**
    - The **Azure CLI** is functionally equivalent to Azure **PowerShell**, with the primary difference being the syntax of commands.
- Azure **PowerShell**
    - Azure **PowerShell** is a shell with which **developers**, **DevOps**, and **IT professionals** can **run commands** called command-lets (**cmdlets**).
## Describe the purpose of **Azure Arc**
- Arc lets you extend your Azure compliance and monitoring to your hybrid and multi-cloud configurations
- Azure Arc simplifies governance and management by delivering a consistent multi-cloud and on-premises management platform.
- With Azure arach we can manage  the following
    - Servers
    - Kubernetes clusters
    - Azure data services
    - SQL Server
    - Virtual machines (preview)
## Describe Azure Resource Manager (ARM) and Azure ARM templates
- Azure Resource Manager (**ARM**) is the deployment and management service for Azure
    - manage infrastructure
    - deploy, manage and monitor all the resource as a group
    - Re-deploy solution through development life-cycle.
    - Dependency definition.
    - Access control to **RBAC**
    - Apply **Tags**


# Describe monitoring tools in Azure
## Describe the purpose of **Azure Advisor**
- Azure Advisor evaluates your Azure resources and makes recommendations to help improve
    - reliability,
    - security,
    - and performance,
- achieve operational excellence, and reduce costs.

## Describe Azure **Service Health**
- Azure Service Health helps you keep track of Azure resource
- Azure service health does this by combining three different Azure services:
    - **Azure status**
    - **Azure Health**
    - **Resource Health**

## Describe Azure **Monitor**, including **Azure Log Analytic**s, , and **Application Insights**
- Azure Monitor
    - **Azure Monitor** is a platform for collecting data on your resources, **analyzing that data**, **visualizing the information**, and **even acting** on the results.
- Azure Log Analytics
    - **Azure Log Analytics** is the tool in the Azure portal where you’ll write and run **log queries** on the data gathered by **Azure Monitor**
- Azure Monitor Alerts
    - Azure Monitor Alerts are an automated way to stay informed when Azure Monitor detects a threshold being crossed.
- Application Insights
    - Application Insights, an Azure Monitor feature, monitors your web applications. Application Insights is capable of monitoring applications that are running in Azure, on-premises, or in a different cloud environment.


# Vocabulary
* Totals Cost of Ownership
* Datacenter
* cloud spending
* IT expenses
* SLA
* service credits
* Redundancy
* Availability
* Azure blueprints
* azure policy
* resource locks
* Azure PowerShell
* Azure CLI
* Azure arch
* ARM
* RBAC
* Tags
* life cycle
* Azure advisor
* Azure service health
*  Azure Monitor
* Azure Log Analytics
*  Application Insights  


# Q n A

- **Plan and manage your Azure costs**
    - what are the **major factors** that **influence the cost** of **running in the cloud**?
    - what is required to run a **datacenter**?        
        Running in the datacenter requires you to **maintain** a **facility** and **purchase**, **power**, **cool**, and **maintain your servers.**         
        Running in the cloud presents new ways to think about your IT expenses.        
    - What are the **factors** that **influence the cost**?
    - What are the **tools available** to help me **estimate** and **understanding my cloud spending**?
    - what is **Total Cost of Ownership (TCO)** how does it help?        
        compare the cost of running in the datacenter versus running on Azure.        
    - What is **TCO** Calculator?
    - what is ***total cost of ownership**?*
    - Use of TCO calculator?
        - Use the **Total Cost of Ownership Calculator** to compare your **current datacenter costs** to **running the same workloads** on Azure.
    - Use of Pricing Calculator?
        - Use the **Pricing calculator to estimate the monthly cost of running** your cloud workloads.
- **Choose the right Azure services by examining SLAs and service lifecycle**
    - **what is SLA?**
    - what are service credits?
    - list all nines of SLAs?
    - what are strategies to reduce to avoid SLAs?
    - How to increase availability?
- Describe cost management in Azure
- Describe features and tools in Azure for governance and compliance
    - What is azure blueprints?
        - What are artifacts?
        - does blue print helps monitor deployments?
        - can you version blueprints in azure?
    - what is azure policy?
        - What is policy initiatives?
    - what is resource locks?
    - what is service trust portal?
- Describe features and tools for managing and deploying Azure resources
    - Different ways to interact with azure cloud?
- Describe monitoring tools in Azure
    - what is azure advisor?
    - What is azure service health?
    - What is azure Monitor, Log Analytics, Monitor Alerts, Application Insights.
- Choose the right Azure services by examining SLAs and service lifecycle

