Qiscus Custom Agent Allocator
======================
[![License](https://poser.pugx.org/aimeos/aimeos-typo3/license.svg)](https://packagist.org/packages/aimeos/aimeos-typo3)

This project is intended to complete the assignment for qiscus as multi channel chat service with custom agent allocation. The customized way is on the queue handler when a customer chat the agent through the available channel. It is compulsory to set the max capacity with the mind of one agent can only serve two customers at one time, along the way, customer should wait first until the agent is available with First In First Out (FIFO) paradigm.

<div align="center">
<a href="https://www.qiscus.com/" target="_blank" > 
<img src="https://res.cloudinary.com/di02ey9t7/image/upload/v1617152054/qiscus/case-study-logo-qiscus.5433a4b9da2693dd49766a971aac887ece8c6d18_q7ruqo.png" alt="qiscus">
</a>
</div>


## Table of content

- 📋 [Tasks](#Tasks)
    - 🔧 [Configuration](#1-configuration)
      -  [User Email](#user-email)
      -  [Qiscus App ID](#qiscus-app-id)
      -  [Widget URL](#widget-url)
    - 📉 [Design and Analysis](#chatbot)
      -  [Flowchart](#flowchart)
      -  [Sequence Diagram](#sequence-diagram)
      -  [ERD](#erd)
    - 🖥️ [Code Implementation](#chatbot)
      - [Postman API Documentation](#documentation)
      - [Demo](#demo)
- 🔗 [Links](#links)

- ⚖️ [License](#license)


## 📋 Tasks
There are three sections for the assignments covering the configuration, design and analysis, and code implementation.

### 🔧 Configuration
The way we setup the app on the qiscus platform and intended to understand the qiscus multi channel chat features and work flow.

#### User Email
the user email for the application: **bariz@qiscus.net**

#### Qiscus App ID
the app id for the application: davok-k9f4zmphwo5nttb

#### Widget URL
the widget url, you can find it on: <a href="https://codepen.io/salamidrus/full/zYNKBEa" target="_blank"> Widget URL</a>

### 📉 Design and Analysis
How the plan to achieve the tasks and required custom services

#### Flowchart
The flowchart for the designed app

<a href="https://whimsical.com/qiscus-flow-chart-DkgQ2i1xmDZg4am42N7Tz2" target="_blank"> 
<img src="https://res.cloudinary.com/di02ey9t7/image/upload/v1617177936/qiscus/qiscus-flow-chart_2x_2_v9cfz2.png" alt="flowchart">
</a>


The flowchart file can be found here: <a href="https://whimsical.com/qiscus-DkgQ2i1xmDZg4am42N7Tz2" target="_blank"> Flowchart </a>

#### Sequence Diagram
The sequence diagram for the designed app

<a href="https://whimsical.com/qiscus-sequence-diagram-XjQDwcwKeFCMT3DvRL17pD" target="_blank"> 
<img src="https://res.cloudinary.com/di02ey9t7/image/upload/v1617177934/qiscus/qiscus-sequence-diagram_2x_xfvabs.png" alt="sequencediagram">
</a>


The sequence diagram file can be found here: <a href="https://whimsical.com/qiscus-sequence-diagram-XjQDwcwKeFCMT3DvRL17pD" target="_blank"> Sequence Diagram </a>

#### ERD
The ERD for the designed app

<a href="https://whimsical.com/qiscus-erd-QkCbKEn2MousXTptMcE4Q9" target="_blank"> 
<img src="https://res.cloudinary.com/di02ey9t7/image/upload/v1617177934/qiscus/qiscus-erd_2x_1_h9wxoa.png" alt="erd">
</a>


The sequence diagram file can be found here: <a href="https://whimsical.com/qiscus-erd-QkCbKEn2MousXTptMcE4Q9" target="_blank"> Sequence Diagram </a>


### 🖥️ Code Implementation
The documentation and demo how the app works

#### Documentation
The collection of all APIs can be found here: <a href="https://documenter.getpostman.com/view/12075190/TzCMd8Q8" target="_blank"> Qiscus - Agent Allocation API </a>

### Demo
Provided video is to see how it is implemented on qiscus multi channel chat services.



## 🔗 Links

* <a href="https://whimsical.com/qiscus-DkgQ2i1xmDZg4am42N7Tz2" target="_blank"> Flowchart </a>
* <a href="https://whimsical.com/qiscus-sequence-diagram-XjQDwcwKeFCMT3DvRL17pD" target="_blank"> Sequence Diagram </a>
* <a href="https://whimsical.com/qiscus-erd-QkCbKEn2MousXTptMcE4Q9" target="_blank"> ERD </a>

## ⚖️ License

The template is licensed under the terms of the GPL Open Source
license and is available for free.



