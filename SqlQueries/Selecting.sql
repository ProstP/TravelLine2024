USE HotelManagement;

/* Найдите все доступные номера для бронирования сегодня.
*/
SELECT * FROM dbo.room
WHERE room_id NOT IN
	(SELECT b.room_id FROM booking b
	WHERE b.check_in_date < GETDATE() AND b.check_out_date >= GETDATE())

/* Найдите всех клиентов, чьи фамилии начинаются с буквы "S".
*/
SELECT * FROM dbo.customer c
WHERE c.second_name LIKE 'S%';

/* Найдите все бронирования для определенного клиента (по имени или электронному адресу).
*/
SELECT * FROM dbo.booking b
WHERE b.customer_id IN
	(SELECT customer_id FROM dbo.customer c
	WHERE c.email = 'myemail@mail.ru');

/* Найдите все бронирования для определенного номера.
*/
SELECT * FROM dbo.booking b
WHERE b.room_id IN
	(SELECT room_id FROM dbo.room r
	WHERE r.room_number = 5)

/* Найдите все номера, которые не забронированы на определенную дату.
*/
SELECT r.room_number FROM dbo.room r
WHERE r.room_id NOT IN
	(SELECT b.room_id FROM dbo.booking b
	WHERE (b.check_in_date < '2024-08-18' AND b.check_out_date >= '2024-08-18'))
