"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Plus } from "lucide-react";
import { WorkoutItem } from "./workout-item";
import { Button } from "@/components/ui/button";

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
            width: exercises.length > 0 ? `${(completedCount / exercises.length) * 100}%` : "0%",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Exercise list or Empty State */}
      {exercises.length > 0 ? (
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
      ) : (
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <Dumbbell className="h-6 w-6 text-muted-foreground" />
          </div>
          <h4 className="mb-1 text-sm font-medium text-foreground">
            No workout planned
          </h4>
          <p className="mb-4 text-xs text-muted-foreground">
            Take a rest day or log a new workout.
          </p>
          <Button variant="outline" size="sm" className="gap-2">
            <Plus size={14} />
            Log Workout
          </Button>
        </div>
      )}
    </motion.div>
  );
}
