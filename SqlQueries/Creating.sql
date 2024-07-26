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
