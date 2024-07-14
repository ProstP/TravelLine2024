using Fighters.Models.Armors;
using Fighters.Models.Fighters;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters.Tests
{
    [TestFixture]
    public class BattleHandlerTest
    {
        [Test]
        public void Battle_TwoEqualsFighters_FirstWin()
        {
            // Arrange
            var first = new Knight( "first", new Human(), new Sword(), new ChainArmor() );
            var second = new Knight( "second", new Human(), new Sword(), new ChainArmor() );

            // Act
            var winner = BattleHandler.Battle( first, second );

            // Assert
            Assert.That( winner.Name, Is.EqualTo( first.Name ) );
        }

        [Test]
        public void Battle_DifferentWeapon_WinWithMorePowerfullWeapon()
        {
            var first = new Knight( "first", new Human(), new Dagger(), new ChainArmor() );
            var second = new Knight( "second", new Human(), new Mace(), new ChainArmor() );

            var winner = BattleHandler.Battle( first, second );

            Assert.That( winner.Name, Is.EqualTo( second.Name ) );
        }

        [Test]
        public void Battle_DifferentArmor_WinWithMorePowerfullArmor()
        {
            var first = new Knight( "first", new Human(), new Sword(), new LeatherArmor() );
            var second = new Knight( "second", new Human(), new Sword(), new IronArmor() );

            var winner = BattleHandler.Battle( first, second );

            Assert.That( winner.Name, Is.EqualTo( second.Name ) );
        }
    }
}