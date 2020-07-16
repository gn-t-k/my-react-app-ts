FROM centos:7

RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN yum install -y nodejs

WORKDIR /usr/src/app

EXPOSE 3000
