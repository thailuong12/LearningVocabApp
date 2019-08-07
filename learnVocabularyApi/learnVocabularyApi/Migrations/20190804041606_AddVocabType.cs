using Microsoft.EntityFrameworkCore.Migrations;

namespace learnVocabularyApi.Migrations
{
    public partial class AddVocabType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "Topics",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "Topics");
        }
    }
}
