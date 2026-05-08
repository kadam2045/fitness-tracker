"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";
import { WorkoutItem } from "./workout-item";

interface Exercise {
  id: string;
  name: string;
  detail: string;
  completed: boolean;
}

/** Mock data — structured for easy replacement with API data */
const initialExercises: Exercise[] = [
  { id: "1", name: "Barbell Squats", detail: "4 × 10 reps", completed: false },
  { id: "2", name: "Bench Press", detail: "3 × 12 reps", completed: true },
  { id: "3", name: "Deadlifts", detail: "3 × 8 reps", completed: false },
  { id: "4", name: "Pull-Ups", detail: "3 × 10 reps", completed: false },
  { id: "5", name: "Plank Hold", detail: "3 × 45 sec", completed: true },
];

export function TodaysWorkoutCard() {
  const [exercises, setExercises] = useState<Exercise[]>(initialExercises);

  const toggleExercise = (id: string) => {
    setExercises((prev) =>
      prev.map((ex) => (ex.id === id ? { ...ex, completed: !ex.completed } : ex))
    );
  };

  const completedCount = exercises.filter((e) => e.completed).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="rounded-2xl border border-border bg-card p-5"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Dumbbell size={16} className="text-primary" />
          </div>
          <h3 className="text-base font-semibold text-foreground">
            Today&apos;s Workout
          </h3>
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          {completedCount}/{exercises.length} done
        </span>
      </div>

      {/* Progress bar */}
      <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={{
            width: `${(completedCount / exercises.length) * 100}%`,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Exercise list */}
      <div className="space-y-1">
        {exercises.map((exercise, i) => (
          <WorkoutItem
            key={exercise.id}
            name={exercise.name}
            detail={exercise.detail}
            completed={exercise.completed}
            onToggle={() => toggleExercise(exercise.id)}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  );
}
