"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LANDING_PAGE_FEATURES } from "@/lib/constants"
import ThreeDModel from "@/components/ui/model";

gsap.registerPlugin(ScrollTrigger)

export function LandingPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".features",
          start: "top 80%",
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-primary/20 to-background">
      <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm bg-slate-950/80">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-slate-200">
              Rowan Portal
            </Link>
            <Button asChild variant={"secondary"}>
              <Link href="/dashboard" className="font-bold">Go to Dashboard</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="">
        <section className="hero relative h-screen flex items-center justify-center overflow-hidden pb-44">
          <motion.div
            className="z-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              Rowan University Student Management Portal
            </h1>
            <p className="text-xl mb-8">Manage your academic journey with ease and unlock your full potential.</p>
            <Button asChild size="lg" variant={"outline"}>
              <Link href="/dashboard">Get Started</Link>
            </Button>

          </motion.div>
          <div
            className="absolute z-10 -bottom-3 flex items-center justify-center ">
            <div className="" >
                <ThreeDModel file="computerpb" />
            </div>
          </div>

          <motion.div className="absolute inset-0 z-0" style={{ y }}>
            {/* Background image or pattern can be added here */}
          </motion.div>
        </section>

        <section className="features py-20 bg-slate-200 dark:bg-stone-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold bg-slate-950 py-2 rounded-md text-center mb-12">Portal Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LANDING_PAGE_FEATURES.map((feature, index) => (
                <Card key={index} className="feature-card">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-stone-900/10 p-3 w-12 h-12 flex items-center justify-center mb-4 dark:bg-stone-50/10">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-stone-600 dark:text-stone-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="cta py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl mb-8">Access your personalized dashboard and take control of your academic journey.</p>
            <Button asChild size="lg" variant={"secondary"}>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-slate-200 text-slate-950 py-8 dark:bg-stone-800">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Rowan University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}