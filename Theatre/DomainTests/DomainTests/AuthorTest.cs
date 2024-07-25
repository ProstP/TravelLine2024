using Domain.Entities;

namespace UnitTests.DomainTests
{
    [TestFixture]
    public class AuthorTest
    {
        DateTime _date = DateTime.Now;

        [Test]
        public void Author_NameIsEmpty_ThrowArgumentException()
        {
            string name = string.Empty;
            string surname = "Not empty";

            Assert.That( () => new Author( name, surname, _date ), Throws.ArgumentException );
        }

        [Test]
        public void Author_NameIsWhitespace_ThrowArgumentException()
        {
            string name = "      ";
            string surname = "Not empty";

            Assert.That( () => new Author( name, surname, _date ), Throws.ArgumentException );
        }

        [Test]
        public void Author_SurnameIsEmpty_ThrowArgumentException()
        {
            string name = "Not empty";
            string surname = string.Empty;

            Assert.That( () => new Author( name, surname, _date ), Throws.ArgumentException );
        }

        [Test]
        public void Author_SurnameIsWhiteSpaces_ThrowArgumentException()
        {
            string name = "Not empty";
            string surname = "     ";

            Assert.That( () => new Author( name, surname, _date ), Throws.ArgumentException );
        }

        [Test]
        public void Author_ExpectedData_SuccessCreatingAndFieldsWillTrue()
        {
            string name = "Some name";
            string surname = "Some surname";

            var author = new Author( name, surname, _date );

            Assert.That( author.Name, Is.EqualTo( name ) );
            Assert.That( author.Surname, Is.EqualTo( surname ) );
            Assert.That( author.Birthday, Is.EqualTo( _date ) );
        }
    }
}