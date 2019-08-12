using Microsoft.EntityFrameworkCore.Migrations;

namespace learnVocabularyApi.Migrations
{
    public partial class updateTableName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Topics");

            migrationBuilder.CreateTable(
                name: "Vocab",
                columns: table => new
                {
                    id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    Pronunciation = table.Column<string>(nullable: true),
                    Example = table.Column<string>(nullable: true),
                    IsMarked = table.Column<bool>(nullable: true),
                    IsLearning = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vocab", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vocab");

            migrationBuilder.CreateTable(
                name: "Topics",
                columns: table => new
                {
                    id = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Example = table.Column<string>(nullable: true),
                    IsLearning = table.Column<bool>(nullable: true),
                    IsMarked = table.Column<bool>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Pronunciation = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Topics", x => x.id);
                });
        }
    }
}
