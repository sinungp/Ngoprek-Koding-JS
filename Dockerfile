FROM nginx:alpine
COPY . /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

# syntaks fo run : docker run -d -p 83:80 -v ngoprekjs:/usr/share/nginx/html  ngoprekjs:v1
