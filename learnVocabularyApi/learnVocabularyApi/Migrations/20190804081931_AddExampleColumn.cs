using Microsoft.EntityFrameworkCore.Migrations;

namespace learnVocabularyApi.Migrations
{
    public partial class AddExampleColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Example",
                table: "Topics",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Example",
                table: "Topics");
        }
    }
}
