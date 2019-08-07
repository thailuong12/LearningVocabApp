using Microsoft.EntityFrameworkCore.Migrations;

namespace learnVocabularyApi.Migrations
{
    public partial class AddVocabPronunciation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Pronunciation",
                table: "Topics",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Pronunciation",
                table: "Topics");
        }
    }
}
