**SmartJournal** - this service for checking attendance of students and for keeping statistics on each student.
***
###Building  
####Preparation:  
```
docker build -t sj_postgresql .
docker run --rm -p5432:5432 --name pg_test sj_postgresql
```
####Run server:  
```
cd web/
mvn spring boot:run  
mvn clean install  
java -jar target/*.jar
```
or execute method main() in WebApplication.class from your IDE
####Client run:  
```
cd ui/
npm install
npm run start
```
###Technologies: 
####Back end:

- **Spring**
 + data jpa
 + validation
 + security
+ **Spring boot**
+ **Hazelcast**
+ **Docker**

#### UI:
* **Angular 2**  

### Database:
- **H2** 
 + http://localhost:8080/console/  
* **PostgreSQL**  
***
If you want use H2 db,you must copy text from file "h2.config" in "application.properties"  
If you want use PostgreSQL db,you must copy text from file "postgresql.config" in "application.properties"

