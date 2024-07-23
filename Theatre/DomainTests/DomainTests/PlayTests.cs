using Domain.Entities;

namespace UnitTests.DomainTests
{
    [TestFixture]
    public class PlayTests
    {
        DateTime _startTime = DateTime.Now;
        DateTime _endTime = DateTime.Now;
        int _theatreId = 0;
        int _compostitionId = 0;

        [Test]
        public void Play_NameIsEmpty_ThrowArgumentEcxeption()
        {
            string name = string.Empty;
            int ticketPrice = 100;
            string description = "some text";

            Assert.That( () => new Play( name, _startTime, _endTime, ticketPrice, description, _theatreId, _compostitionId ),
                Throws.ArgumentException );
        }

        [Test]
        public void Play_TicketPriceIsNegative_ThrowArgumentEcxeption()
        {
            string name = "some text";
            int ticketPrice = -222;
            string description = "some text";

            Assert.That( () => new Play( name, _startTime, _endTime, ticketPrice, description, _theatreId, _compostitionId ),
                Throws.ArgumentException );
        }

        [Test]
        public void Play_DescriptionIsEmpty_ThrowArgumentEcxeption()
        {
            string name = "some text";
            int ticketPrice = 100;
            string description = string.Empty;

            Assert.That( () => new Play( name, _startTime, _endTime, ticketPrice, description, _theatreId, _compostitionId ),
                Throws.ArgumentException );
        }

        [Test]
        public void Play_EcpectedData_SuccessCreatingAndFieldsWillTrue()
        {
            string name = "some name";
            int ticketPrice = 100;
            string description = "some dec...";

            var play = new Play( name, _startTime, _endTime, ticketPrice, description, _theatreId, _compostitionId );

            Assert.That( play.Name, Is.EqualTo( name ) );
            Assert.That( play.StartTime, Is.EqualTo( _startTime ) );
            Assert.That( play.EndTime, Is.EqualTo( _endTime ) );
            Assert.That( play.TicketPrice, Is.EqualTo( ticketPrice ) );
            Assert.That( play.Description, Is.EqualTo( description ) );
            Assert.That( play.TheatreId, Is.EqualTo( _theatreId ) );
            Assert.That( play.CompositionId, Is.EqualTo( _compostitionId ) );
        }
    }
}
