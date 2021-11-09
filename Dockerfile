FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html
RUN yarn
RUN yarn build
COPY ./build /usr/share/nginx/html
COPY ./.nginx/nginx.conf /etc/nginx/nginx.template
RUN apk --no-cache add curl
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
