using Domain.Entities;

namespace UnitTests.DomainTests
{
    [TestFixture]
    public class CompositionTests
    {
        int _authorId = 0;

        [Test]
        public void Composition_NameIsEmpty_ThrowsArgumentException()
        {
            string name = string.Empty;
            string shortDescription = "Some text";
            string characterInfo = "Some text";

            Assert.That( () => new Composition( name, shortDescription, characterInfo, _authorId ), Throws.ArgumentException );
        }

        [Test]
        public void Composition_ShortDescriptionIsEmpty_ThrowsArgumentException()
        {
            string name = string.Empty;
            string shortDescription = "Some text";
            string characterInfo = "Some text";

            Assert.That( () => new Composition( name, shortDescription, characterInfo, _authorId ), Throws.ArgumentException );
        }

        [Test]
        public void Composition_CharacterInfoIsEmpty_ThrowsArgumentException()
        {
            string name = string.Empty;
            string shortDescription = "Some text";
            string characterInfo = "Some text";

            Assert.That( () => new Composition( name, shortDescription, characterInfo, _authorId ), Throws.ArgumentException );
        }

        [Test]
        public void Composition_ExpectedData_SuccessCreatingAndFieldsWillTrue()
        {
            string name = "Some name";
            string shortDescription = "Some des...";
            string characterInfo = "Some info";

            var composition = new Composition( name, shortDescription, characterInfo, _authorId );

            Assert.That( composition.Name, Is.EqualTo( name ) );
            Assert.That( composition.ShortDescription, Is.EqualTo( shortDescription ) );
            Assert.That( composition.CharactersInfo, Is.EqualTo( characterInfo ) );
            Assert.That( composition.AuthorId, Is.EqualTo( _authorId ) );
        }
    }
}
