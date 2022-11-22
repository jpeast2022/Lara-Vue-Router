<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Schedule>
 */
class ScheduleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' =>User::all()->random()->id,
            'starting_time' => $this->faker->time(),
            'end_time' => $this->faker->time(),
            'day' => $this->faker->randomElement(['Monday','Tuesday','Wednesday']),
            'status' => $this->faker->randomElement(['active','unactive'])
        ];
    }
}
