CREATE TABLE public.usertable
(
    id bigserial NOT NULL,
    "firstName" text,
    "lastName" text,
    email text NOT NULL,
    password text NOT NULL,
    PRIMARY KEY (id, email)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.usertable
    OWNER to postgres;

INSERT INTO public.usertable(
	id, "firstName", "lastName", email, password)
	VALUES (DEFAULT, 'Nicholas', 'Bannister', 'njbannister15@gmail.com', '$2a$10$JLtvuaeGqz9fRAmHvpkfxu2olHYxy7PomKdBfwc9gPcq3PqfNQAyG');
