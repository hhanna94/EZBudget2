using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace API.Migrations
{
    public partial class AddBudgetModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Budget",
                columns: table => new
                {
                    BudgetId = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(nullable: true),
                    Income = table.Column<double>(nullable: false),
                    Remainder = table.Column<double>(nullable: false),
                    Savings = table.Column<double>(nullable: false),
                    Rent = table.Column<double>(nullable: false),
                    Car = table.Column<double>(nullable: false),
                    Utilities = table.Column<double>(nullable: false),
                    CreditCard = table.Column<double>(nullable: false),
                    Health = table.Column<double>(nullable: false),
                    Entertainment = table.Column<double>(nullable: false),
                    Loans = table.Column<double>(nullable: false),
                    Groceries = table.Column<double>(nullable: false),
                    Misc = table.Column<double>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Budget", x => x.BudgetId);
                    table.ForeignKey(
                        name: "FK_Budget_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Budget_UserId",
                table: "Budget",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Budget");
        }
    }
}
