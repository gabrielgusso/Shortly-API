--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: session; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.session (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL
);


--
-- Name: session_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.session_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: session_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.session_id_seq OWNED BY public.session.id;


--
-- Name: shorten; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.shorten (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "userId" integer NOT NULL,
    "viewsCounter" integer DEFAULT 0
);


--
-- Name: shorten_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.shorten_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: shorten_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.shorten_id_seq OWNED BY public.shorten.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: session id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.session ALTER COLUMN id SET DEFAULT nextval('public.session_id_seq'::regclass);


--
-- Name: shorten id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorten ALTER COLUMN id SET DEFAULT nextval('public.shorten_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.session VALUES (6, 1, '15c8c0ed-3c48-42b9-b30d-c07645550d62');
INSERT INTO public.session VALUES (7, 1, '6341caa5-e1f4-4d41-a4d3-92f7a3d3a068');
INSERT INTO public.session VALUES (8, 1, '5d2780ea-ec68-44f1-8f1c-4fe7b554e6c4');
INSERT INTO public.session VALUES (9, 1, '1df9a861-0349-44ee-a2c9-be96e99ddaf8');
INSERT INTO public.session VALUES (10, 2, 'ae97effc-ba8e-42c6-90c2-ba11b432dbae');


--
-- Data for Name: shorten; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.shorten VALUES (1, 'https://www.driven.com.br/', 'k9i8gMHHukGjK2gDXy1LG', 1, 5);
INSERT INTO public.shorten VALUES (2, 'https://www.google.com.br/', 'LGYXNwjI1GBonZHBqWqIw', 1, 1);
INSERT INTO public.shorten VALUES (3, 'https://github.com/', 'vJ5UiYwKL10VXSPQ42Cwa', 2, 1);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'gabriel', 'gabriel@hotmail.com', '$2b$10$v0NVXgCXCVa8aDzztlvkOenUGYq7YyitetfH2ctNDACCn.93Jn/WG');
INSERT INTO public.users VALUES (2, 'teste', 'teste@hotmail.com', '$2b$10$KEBKQGWJaOmjHePiJCkUsucj4Hx8umx/91uGy7OJY9DbuUzdXnOCq');


--
-- Name: session_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.session_id_seq', 10, true);


--
-- Name: shorten_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.shorten_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (id);


--
-- Name: shorten shorten_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorten
    ADD CONSTRAINT shorten_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: session session_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: shorten shorten_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shorten
    ADD CONSTRAINT shorten_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

