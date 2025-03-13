<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('office_spaces', function (Blueprint $table) {
            $table->decimal('rating', 2, 1)->default(0)->after('slug');
        });
    }

    public function down()
    {
        Schema::table('office_spaces', function (Blueprint $table) {
            $table->dropColumn('rating');
        });
    }
};
