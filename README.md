**SmartJournal** - this service for checking attendance of students and for keeping statistics on each student.
***
###Building  
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

#### UI:
* **Angular 2**  

### Database:
- **H2** 
 + http://localhost:8080/console/  
 + jdbc:h2:mem:test
