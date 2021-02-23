using Microsoft.EntityFrameworkCore.Migrations;

namespace RaidManager.API.Migrations
{
    public partial class CharacterExpansion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FullName",
                table: "Characters",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FullName",
                table: "Characters");
        }
    }
}
