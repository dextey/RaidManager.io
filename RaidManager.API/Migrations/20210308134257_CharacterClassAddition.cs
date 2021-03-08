using Microsoft.EntityFrameworkCore.Migrations;

namespace RaidManager.API.Migrations
{
    public partial class CharacterClassAddition : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Class",
                table: "Characters",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Class",
                table: "Characters");
        }
    }
}
