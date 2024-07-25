using Domain.Entities;

namespace UnitTests.DomainTests
{
    [TestFixture]
    public class TheatreTests
    {
        DateTime _openingDate = DateTime.Now;
        TimeOnly _openingTime = new TimeOnly( hour: 9, minute: 0 );
        TimeOnly _closingTime = new TimeOnly( hour: 22, minute: 0 );
        int _theatreId = 0;

        [Test]
        public void Theatre_NameIsEmpty_ThrowArgumentException()
        {
            string name = string.Empty;
            string adderess = "address";
            string description = "description";
            string phoneNumber = "phoneNumber";

            Assert.That( () => new Theatre( name, adderess, _openingDate, description, phoneNumber ),
                Throws.ArgumentException );
        }

        [Test]
        public void Theatre_AddressIsEmpty_ThrowArgumentException()
        {
            string name = "name";
            string adderess = string.Empty;
            string description = "description";
            string phoneNumber = "phoneNumber";

            Assert.That( () => new Theatre( name, adderess, _openingDate, description, phoneNumber ),
                Throws.ArgumentException );
        }

        [Test]
        public void Theatre_DescriptionIsEmpty_ThrowArgumentException()
        {
            string name = "name";
            string adderess = "adderess";
            string description = string.Empty;
            string phoneNumber = "phoneNumber";

            Assert.That( () => new Theatre( name, adderess, _openingDate, description, phoneNumber ),
                Throws.ArgumentException );
        }

        [Test]
        public void Theatre_PhoneNumberIsEmpty_ThrowArgumentException()
        {
            string name = "name";
            string adderess = "adderess";
            string description = "description";
            string phoneNumber = string.Empty;

            Assert.That( () => new Theatre( name, adderess, _openingDate, description, phoneNumber ),
                Throws.ArgumentException );
        }

        [Test]
        public void Theatre_ExpectedData_SuccessCreatingAndFieldsWillTrue()
        {
            string name = "name";
            string adderess = "adderess";
            string description = "description";
            string phoneNumber = "phoneNumber";

            var theatre = new Theatre( name, adderess, _openingDate, description, phoneNumber );

            Assert.That( theatre.Name, Is.EqualTo( name ) );
            Assert.That( theatre.Address, Is.EqualTo( adderess ) );
            Assert.That( theatre.OpeningDate, Is.EqualTo( _openingDate ) );
            Assert.That( theatre.Description, Is.EqualTo( description ) );
            Assert.That( theatre.PhoneNumber, Is.EqualTo( phoneNumber ) );
        }

        [Test]
        public void Update_OnlyName_ChangeOnlyName()
        {
            string name = "name";
            string adderess = "adderess";
            string description = "description";
            string phoneNumber = "phoneNumber";
            var theatre = new Theatre( name, adderess, _openingDate, description, phoneNumber );

            string newName = "new name";
            theatre.Update( newName, "", "" );

            Assert.That( theatre.Name, Is.EqualTo( newName ) );
            Assert.That( theatre.Description, Is.EqualTo( description ) );
            Assert.That( theatre.PhoneNumber, Is.EqualTo( phoneNumber ) );
        }

        [Test]
        public void Update_OnlyDescription_ChangeOnlyDescription()
        {
            string name = "name";
            string adderess = "adderess";
            string description = "description";
            string phoneNumber = "phoneNumber";
            var theatre = new Theatre( name, adderess, _openingDate, description, phoneNumber );

            string newDescription = "new description";
            theatre.Update( "", newDescription, "" );

            Assert.That( theatre.Name, Is.EqualTo( name ) );
            Assert.That( theatre.Description, Is.EqualTo( newDescription ) );
            Assert.That( theatre.PhoneNumber, Is.EqualTo( phoneNumber ) );
        }

        [Test]
        public void Update_OnlyPhoneNumber_ChangeOnlyPhoneNumber()
        {
            string name = "name";
            string adderess = "adderess";
            string description = "description";
            string phoneNumber = "phoneNumber";
            var theatre = new Theatre( name, adderess, _openingDate, description, phoneNumber );

            string newPhoneNumber = "phoneNumber";
            theatre.Update( "", "", newPhoneNumber );

            Assert.That( theatre.Name, Is.EqualTo( name ) );
            Assert.That( theatre.Description, Is.EqualTo( description ) );
            Assert.That( theatre.PhoneNumber, Is.EqualTo( newPhoneNumber ) );
        }

        [Test]
        public void Update_AllFields_ChangeAllFields()
        {
            string name = "name";
            string adderess = "adderess";
            string description = "description";
            string phoneNumber = "phoneNumber";
            var theatre = new Theatre( name, adderess, _openingDate, description, phoneNumber );

            string newName = "new name";
            string newDescription = "new description";
            string newPhoneNumber = "phoneNumber";
            theatre.Update( newName, newDescription, newPhoneNumber );

            Assert.That( theatre.Name, Is.EqualTo( newName ) );
            Assert.That( theatre.Description, Is.EqualTo( newDescription ) );
            Assert.That( theatre.PhoneNumber, Is.EqualTo( newPhoneNumber ) );
        }

        private Theatre CreateTheatreWithRightFields()
        {
            string name = "name";
            string adderess = "adderess";
            string description = "description";
            string phoneNumber = "phoneNumber";

            return new Theatre( name, adderess, _openingDate, description, phoneNumber );
        }

        [Test]
        public void AddNewWorkingHours_AddToEmptyList_ListWillNotEmpty()
        {
            var theatre = CreateTheatreWithRightFields();

            theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 4, 4, _theatreId ) );

            Assert.That( theatre.WorkingHours.Any(), Is.True );
            Assert.That( theatre.WorkingHours.Count(), Is.EqualTo( 1 ) );
        }

        [Test]
        public void AddNewWorkingHours_AddNotOverlapWorkingHours_SuccessAdding()
        {
            var theatre = CreateTheatreWithRightFields();

            theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 1, 2, _theatreId ) );
            theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 3, 5, _theatreId ) );
            theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 6, 0, _theatreId ) );

            Assert.That( theatre.WorkingHours.Count, Is.EqualTo( 3 ) );
        }

        [Test]
        public void AddNewWorkingHours_AddOverlapWorkingHours_WillTrowException()
        {
            var theatre = CreateTheatreWithRightFields();

            theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 1, 3, _theatreId ) );
            Assert.That( () => theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 2, 6, _theatreId ) ),
                Throws.ArgumentException );
        }

        [Test]
        public void AddNewWorkingHours_OldWorkingHoursContainNew_WillTrowException()
        {
            var theatre = CreateTheatreWithRightFields();

            theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 1, 5, _theatreId ) );
            Assert.That( () => theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 2, 3, _theatreId ) ),
                Throws.ArgumentException );
        }

        [Test]
        public void AddNewWorkingHours_NewWorkingHoursContainOld_WillTrowException()
        {
            var theatre = CreateTheatreWithRightFields();

            theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 2, 3, _theatreId ) );
            Assert.That( () => theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 1, 6, _theatreId ) ),
                Throws.ArgumentException );
        }

        [Test]
        public void AddNewWorkingHours_AddOverlapWorkingHoursNewGoesNextWeek_WillTrowException()
        {
            var theatre = CreateTheatreWithRightFields();

            theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 0, 3, _theatreId ) );
            Assert.That( () => theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 5, 1, _theatreId ) ),
                Throws.ArgumentException );
        }

        [Test]
        public void AddNewWorkingHours_AddOverlapWorkingHoursOldGoesNextWeek_WillTrowException()
        {
            var theatre = CreateTheatreWithRightFields();

            theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 5, 3, _theatreId ) );
            Assert.That( () => theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 1, 2, _theatreId ) ),
                Throws.ArgumentException );
        }

        [Test]
        public void AddNewWorkingHours_AddOverlapWorkingHoursBothGoesNextWeek_WillTrowException()
        {
            var theatre = CreateTheatreWithRightFields();

            theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 5, 3, _theatreId ) );
            Assert.That( () => theatre.AddNewWorkingHours( new WorkingHours( _openingTime, _closingTime, 6, 2, _theatreId ) ),
                Throws.ArgumentException );
        }
    }
}
