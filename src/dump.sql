CREATE TABLE "users" (
	"id" serial PRIMARY KEY,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL
);



CREATE TABLE "session" (
	"id" serial PRIMARY KEY,
	"userId" integer NOT NULL,
	"token" TEXT NOT NULL
);



CREATE TABLE "shorten" (
	"id" serial PRIMARY KEY,
	"url" TEXT NOT NULL,
	"shortUrl" TEXT NOT NULL,
	"userId" integer NOT NULL
);



CREATE TABLE "views" (
	"id" serial PRIMARY KEY,
	"shortenId" integer NOT NULL
);




ALTER TABLE "session" ADD CONSTRAINT "session_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");

ALTER TABLE "shorten" ADD CONSTRAINT "shorten_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");

ALTER TABLE "views" ADD CONSTRAINT "views_fk0" FOREIGN KEY ("shortenId") REFERENCES "shorten"("id");




