USE HotelManagement;

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='room')
	CREATE TABLE dbo.room (
		room_id INT IDENTITY(1,1) NOT NULL,
		room_number INT NOT NULL,
		room_type NVARCHAR(50) NOT NULL,
		availability BIT NOT NULL,
		price_per_night MONEY NOT NULL,

		CONSTRAINT PK_room_room_id PRIMARY KEY (room_id)
	);

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = 'customer')
	CREATE TABLE dbo.customer (
		customer_id INT IDENTITY(1,1) NOT NULL,
		first_name NVARCHAR(20) NOT NULL,
		second_name NVARCHAR(20) NOT NULL,
		email NVARCHAR(30) NOT NULL,
		phone_number NVARCHAR(20) NOT NULL,

		CONSTRAINT PK_customer_customer_id PRIMARY KEY (customer_id)
	);

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = 'booking')
	CREATE TABLE dbo.booking (
		booking_id INT IDENTITY(1,1) NOT NULL,
		customer_id INT NOT NULL,
		room_id INT NOT NULL,
		check_in_date DATE NOT NULL,
		check_out_date DATE NOT NULL,

		CONSTRAINT PK_booking_booking_id PRIMARY KEY (booking_id),

		CONSTRAINT FK_booking_customer_id FOREIGN KEY (customer_id) REFERENCES HotelManagement.dbo.customer (customer_id),
		CONSTRAINT FK_booking_room_id FOREIGN KEY (room_id) REFERENCES HotelManagement.dbo.room (room_id)
	);

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = 'facility')
	CREATE TABLE dbo.facility (
		facility_id INT IDENTITY(1,1) NOT NULL,
		facility_name NVARCHAR(50) NOT NULL,

		CONSTRAINT PK_facility_facility_id PRIMARY KEY (facility_id)
	);

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = 'room_to_facility')
	CREATE TABLE dbo.room_to_facility (
		room_id INT NOT NULL,
		facility_id INT NOT NULL,

		CONSTRAINT PK_room_to_facility_room_id_facility_id PRIMARY KEY (room_id, facility_id),

		CONSTRAINT FK_room_to_facility_room_id FOREIGN KEY (room_id) REFERENCES HotelManagement.dbo.room (room_id),
		CONSTRAINT FK_room_to_facility_facility_id FOREIGN KEY (facility_id) REFERENCES HotelManagement.dbo.facility (facility_id)
	);

INSERT INTO dbo.room (room_number, room_type, availability, price_per_night)
VALUES
	(12, 'single room', 1, 100),
	(5, 'double room', 0, 150),
	(10, 'single room', 1, 200),
	(23, 'triple room', 1, 300),
	(3, 'double room', 0, 100);

INSERT INTO dbo.customer (first_name, second_name, email, phone_number)
VALUES
	('Pavel', 'Kuznetsov', 'myemail@mail.ru', '+79991112233'),
	('Stefan', 'Beris', 'stefanb12@gmail.ru', '+79021012244'),
	('Janet', 'Cassini', 'jenicas@mail.ru', '+79991112233'),
	('Helge', 'Miura', 'miurahell@mail.ru', '+79000002033'),
	('Bryn', 'Weyl', 'bw1234@mail.ru', '+79991112345'),
	('Justice', 'Zener', 'jeszen111@mail.ru', '+79909911012233');

INSERT INTO dbo.booking (customer_id, room_id, check_in_date, check_out_date)
VALUES
	(1, 4, '2024-08-1', '2024-08-31'),
	(2, 2, '2024-1-1', '2024-9-30'),
	(5, 1, '2024-10-6', '2024-10-14'),
	(6, 2, '2024-12-1', '2024-12-10'),
	(4, 3, '2024-9-5', '2024-9-10'),
	(1, 5, '2024-11-11', '2024-11-15'),
	(3, 3, '2024-9-1', '2024-9-15');

INSERT INTO dbo.facility (facility_name)
VALUES
	('WiFi'),
	('Minibar'),
	('Conditioner'),
	('Safe deposit'),
	('TV');

INSERT INTO dbo.room_to_facility (room_id, facility_id)
VALUES
	(1, 1),
	(1, 3),
	(2, 1),
	(2, 2),
	(2, 3),
	(2, 5),
	(3, 1),
	(3, 3),
	(3, 4),
	(3, 5),
	(4, 1),
	(4, 2),
	(4, 3),
	(4, 5),
	(5, 1),
	(5, 3),
	(5, 5);

/*	Ќайдите все доступные номера дл€ бронировани€ сегодн€.
*/
SELECT * FROM dbo.room
WHERE room_id NOT IN
	(SELECT b.room_id FROM booking b
	WHERE b.check_in_date < GETDATE() AND b.check_out_date >= GETDATE())

/* Ќайдите всех клиентов, чьи фамилии начинаютс€ с буквы "S".
*/
SELECT * FROM dbo.customer c
WHERE c.second_name LIKE 'S%';

/* Ќайдите все бронировани€ дл€ определенного клиента (по имени или электронному адресу).
*/
SELECT * FROM dbo.booking b
WHERE b.customer_id IN
	(SELECT customer_id FROM dbo.customer c
	WHERE c.email = 'myemail@mail.ru');

/* Ќайдите все бронировани€ дл€ определенного номера.
*/
SELECT * FROM dbo.booking b
WHERE b.room_id IN
	(SELECT room_id FROM dbo.room r
	WHERE r.room_number = 5)

/* Ќайдите все номера, которые не забронированы на определенную дату.
*/
SELECT r.room_number FROM dbo.room r
WHERE r.room_id NOT IN
	(SELECT b.room_id FROM dbo.booking b
	WHERE (b.check_in_date < '2024-08-18' AND b.check_out_date >= '2024-08-18'))
