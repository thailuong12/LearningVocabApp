using Microsoft.EntityFrameworkCore.Migrations;

namespace learnVocabularyApi.Migrations
{
    public partial class updateModelIsLearning : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsLearning",
                table: "Topics",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsLearning",
                table: "Topics");
        }
    }
}
