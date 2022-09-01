#base image
FROM node

#current folder files will be copied to node docker root
COPY . /

#docker container가 사용할 port
EXPOSE 8082

# docker container 생성 후 실행할 명령
CMD [ "node", "restServer.js" ]
