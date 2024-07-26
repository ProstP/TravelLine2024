USE HotelManagement;

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
