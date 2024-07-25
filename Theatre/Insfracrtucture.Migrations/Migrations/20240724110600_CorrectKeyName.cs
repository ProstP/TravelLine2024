using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class CorrectKeyName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WorkingHours_Theatre_TheaterId",
                table: "WorkingHours");

            migrationBuilder.RenameColumn(
                name: "TheaterId",
                table: "WorkingHours",
                newName: "TheatreId");

            migrationBuilder.RenameIndex(
                name: "IX_WorkingHours_TheaterId",
                table: "WorkingHours",
                newName: "IX_WorkingHours_TheatreId");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkingHours_Theatre_TheatreId",
                table: "WorkingHours",
                column: "TheatreId",
                principalTable: "Theatre",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WorkingHours_Theatre_TheatreId",
                table: "WorkingHours");

            migrationBuilder.RenameColumn(
                name: "TheatreId",
                table: "WorkingHours",
                newName: "TheaterId");

            migrationBuilder.RenameIndex(
                name: "IX_WorkingHours_TheatreId",
                table: "WorkingHours",
                newName: "IX_WorkingHours_TheaterId");

            migrationBuilder.AddForeignKey(
                name: "FK_WorkingHours_Theatre_TheaterId",
                table: "WorkingHours",
                column: "TheaterId",
                principalTable: "Theatre",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
