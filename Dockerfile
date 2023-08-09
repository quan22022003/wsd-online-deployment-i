FROM denoland/deno:alpine-1.29.2

EXPOSE 7777

WORKDIR /wsd-online-deployment-i

COPY deps.js .

RUN deno cache deps.js

COPY . .

CMD [ "run", "--unstable", "--watch", "--allow-net", "--allow-read", "--allow-write", "--allow-env", "--no-check", "app.js" ]
