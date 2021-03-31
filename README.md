Qiscus Custom Agent Allocator
======================
[![License](https://poser.pugx.org/aimeos/aimeos-typo3/license.svg)](https://packagist.org/packages/aimeos/aimeos-typo3)

This project is intended to complete the assignment for qiscus as multi channel chat service with custom agent allocation. The customized way is on the queue handler when a customer chat the agent through the available channel. It is compulsory to set the max capacity with the mind of one agent can only serve two customers at one time, along the way, customer should wait first until the agent is available with First In First Out (FIFO) paradigm.


<a href="https://www.qiscus.com/" target="_blank"> 
<img src="https://res.cloudinary.com/di02ey9t7/image/upload/v1617152054/qiscus/case-study-logo-qiscus.5433a4b9da2693dd49766a971aac887ece8c6d18_q7ruqo.png" alt="qiscus">
</a>


## Table of content

- [Tasks](#website)
    - [1. Configuration](#1-configuration)
      -  [User Email](#user-email)
      -  [Qiscus App ID](#qiscus-app-id)
      -  [Widget URL](#widget-url)
    - [2. Design and Analysis](#chatbot)
      -  Flowchart
      -  Sequence Diagram
      -  ERD
    - [3. Code Implementation](#chatbot)
      - Constraint
      - Postman API Documentation
      - Demo
- [Links](#links)

- [License](#license)


## Tasks
There are three sections for the assignments covering the configuration, design and analysis, and code implementation.

### 1. Configuration
The way we setup the app on the qiscus platform and intended to understand the qiscus multi channel chat features and work flow.

#### User Email
the user email for the application: **bariz@qiscus.net**

#### Qiscus App ID
the app id for the application: davok-k9f4zmphwo5nttb

#### Widget URL
the widget url, you find it on: <a href="https://codepen.io/salamidrus/full/zYNKBEa" target="_blank"> Widget URL</a>


## Links

* <a href="https://whimsical.com/qiscus-DkgQ2i1xmDZg4am42N7Tz2" target="_blank"> Flowchart </a>
* <a href="https://whimsical.com/qiscus-sequence-diagram-XjQDwcwKeFCMT3DvRL17pD" target="_blank"> Sequence Diagram </a>
* <a href="https://whimsical.com/qiscus-erd-QkCbKEn2MousXTptMcE4Q9" target="_blank"> ERD </a>

## License

The template is licensed under the terms of the GPL Open Source
license and is available for free.



