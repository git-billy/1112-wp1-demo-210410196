toc.dat                                                                                             0000600 0004000 0002000 00000003275 14375412455 0014460 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP                           {            wp2_demo_96    15.1    15.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         �           1262    27111    wp2_demo_96    DATABASE     s   CREATE DATABASE wp2_demo_96 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C.UTF-8';
    DROP DATABASE wp2_demo_96;
                postgres    false         �            1259    27113    card_96    TABLE     �   CREATE TABLE public.card_96 (
    id integer NOT NULL,
    title character varying(255),
    descrip character varying(255),
    category character varying(255),
    img character varying(255),
    remote_img character varying(255)
);
    DROP TABLE public.card_96;
       public         heap    postgres    false         �          0    27113    card_96 
   TABLE DATA           P   COPY public.card_96 (id, title, descrip, category, img, remote_img) FROM stdin;
    public          postgres    false    214       3288.dat I           2606    27119    card_96 card_96_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.card_96
    ADD CONSTRAINT card_96_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.card_96 DROP CONSTRAINT card_96_pkey;
       public            postgres    false    214                                                                                                                                                                                                                                                                                                                                           3288.dat                                                                                            0000600 0004000 0002000 00000003514 14375412456 0014274 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Seven Reasons Why Coffee Is Awesome	Lorem ipsum dolor sit amet consectetur adipisicing elit.	lifestyle	/images/photo-1.jpg	https://hzllwkixijuoqbropnat.supabase.co/storage/v1/object/public/demo-96/card-96/photo-1.jpg
2	Travel To Paris	Lorem ipsum dolor sit amet consectetur adipisicing elit.	travel	/images/photo-2.jpg	https://hzllwkixijuoqbropnat.supabase.co/storage/v1/object/public/demo-96/card-96/photo-2.jpg
3	Coffee Brings Friendship	Lorem ipsum dolor sit amet consectetur adipisicing elit.	lifestyle	/images/photo-3.jpg	https://hzllwkixijuoqbropnat.supabase.co/storage/v1/object/public/demo-96/card-96/photo-3.jpg
4	Coffee Make You Feel Good	Lorem ipsum dolor sit amet consectetur adipisicing elit.	lifestyle	/images/photo-4.jpg	https://hzllwkixijuoqbropnat.supabase.co/storage/v1/object/public/demo-96/card-96/photo-4.jpg
5	Coffee Make You Calm	Lorem ipsum dolor sit amet consectetur adipisicing elit.	lifestyle	/images/photo-5.jpg	https://hzllwkixijuoqbropnat.supabase.co/storage/v1/object/public/demo-96/card-96/photo-5.jpg
6	101 Tower In Taipei	Lorem ipsum dolor sit amet consectetur adipisicing elit.	travel	/images/photo-6.jpg	https://hzllwkixijuoqbropnat.supabase.co/storage/v1/object/public/demo-96/card-96/photo-6.jpg
7	Sun Rise From The Mountain	Lorem ipsum dolor sit amet consectetur adipisicing elit.	travel	/images/photo-7.jpg	https://hzllwkixijuoqbropnat.supabase.co/storage/v1/object/public/demo-96/card-96/photo-7.jpg
8	Serene Lake With Trees	Lorem ipsum dolor sit amet consectetur adipisicing elit.	travel	/images/photo-8.jpg	https://hzllwkixijuoqbropnat.supabase.co/storage/v1/object/public/demo-96/card-96/photo-8.jpg
9	Rocks Of Queen Head In Yehliu Taiwan	Lorem ipsum dolor sit amet consectetur adipisicing elit.	travel	/images/photo-9.jpg	https://hzllwkixijuoqbropnat.supabase.co/storage/v1/object/public/demo-96/card-96/photo-9.jpg
\.


                                                                                                                                                                                    restore.sql                                                                                         0000600 0004000 0002000 00000004123 14375412456 0015377 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

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

DROP DATABASE wp2_demo_96;
--
-- Name: wp2_demo_96; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE wp2_demo_96 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C.UTF-8';


ALTER DATABASE wp2_demo_96 OWNER TO postgres;

\connect wp2_demo_96

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
-- Name: card_96; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.card_96 (
    id integer NOT NULL,
    title character varying(255),
    descrip character varying(255),
    category character varying(255),
    img character varying(255),
    remote_img character varying(255)
);


ALTER TABLE public.card_96 OWNER TO postgres;

--
-- Data for Name: card_96; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.card_96 (id, title, descrip, category, img, remote_img) FROM stdin;
\.
COPY public.card_96 (id, title, descrip, category, img, remote_img) FROM '$$PATH$$/3288.dat';

--
-- Name: card_96 card_96_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.card_96
    ADD CONSTRAINT card_96_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             