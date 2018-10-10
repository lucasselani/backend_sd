FROM mysql:5.6.23

ENV MYSQL_ROOT_PASSWORD root  
ENV MYSQL_DATABASE ec021
ENV MYSQL_USER root
ENV MYSQL_PASSWORD root

ADD setup.sql /docker-entrypoint-initdb.d/setup.sql
ADD init_db.sh /docker-entrypoint-initdb.d/init_db.sh
RUN chmod -R 777 /docker-entrypoint-initdb.d