
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full pt-32 pb-16 md:pt-40 md:pb-20 bg-slate-50">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors group w-fit"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>

          <div>
            <span className="px-3 py-1 text-xs font-medium tracking-wider text-foreground/80 uppercase bg-secondary rounded-full">
              UX/UI Design
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4">
            Circful - Employee Engagement Platform
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mt-4">
            A software that helps managers become effective leaders, by understanding their team members and automating leadership practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
