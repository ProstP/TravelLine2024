using Domain.Entities;

namespace UnitTests.DomainTests
{
    [TestFixture]
    public class WorkingHoursTests
    {
        TimeOnly _openingTime = new TimeOnly( hour: 9, minute: 0 );
        TimeOnly _closingTime = new TimeOnly( hour: 22, minute: 0 );
        int _theatreId = 0;

        [Test]
        public void WorkingHours_ValidFromMoreMaxValue_WillTrowException()
        {
            byte validFrom = 8;
            byte validUntil = 4;

            Assert.That( () => new WorkingHours( _openingTime, _closingTime, validFrom, validUntil, _theatreId ),
                Throws.ArgumentException );
        }

        [Test]
        public void WorkingHours_ValidUntilMoreMaxValue_WillTrowException()
        {
            byte validFrom = 2;
            byte validUntil = 8;

            Assert.That( () => new WorkingHours( _openingTime, _closingTime, validFrom, validUntil, _theatreId ),
                Throws.ArgumentException );
        }

        [Test]
        public void WorkingHours_ExpectedData_SuccessCreatingAndFieldsWillTrue()
        {
            byte validFrom = 0;
            byte validUntil = 3;

            var workingHours = new WorkingHours( _openingTime, _closingTime, validFrom, validUntil, _theatreId );

            Assert.That( workingHours.OpeningTime, Is.EqualTo( _openingTime ) );
            Assert.That( workingHours.ClosingTime, Is.EqualTo( _closingTime ) );
            Assert.That( workingHours.ValidFrom, Is.EqualTo( validFrom ) );
            Assert.That( workingHours.ValidUntil, Is.EqualTo( validUntil ) );
            Assert.That( workingHours.TheaterId, Is.EqualTo( _theatreId ) );
        }

        [Test]
        public void WorkingHours_ValidFromEqualValidUntil_SuccessCreatingValidFromEqualValidUntil()
        {
            byte validFrom = 4;
            byte validUntil = 4;

            var workingHours = new WorkingHours( _openingTime, _closingTime, validFrom, validUntil, _theatreId );

            Assert.That( workingHours.ValidFrom, Is.EqualTo( workingHours.ValidUntil ) );
        }
    }
}
