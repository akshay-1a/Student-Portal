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
    <div ref={containerRef} className="h-full bg-gradient-to-b from-primary/20 to-background">

      <main className="">
        <section className="hero relative h-[91vh] flex items-center justify-center overflow-hidden pb-44">
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



        {/* Events */}
        <section className="events py-20 bg-slate-200 dark:bg-stone-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold bg-slate-950 py-2 rounded-md text-center mb-12">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Event 1', date: '2024-03-15', description: 'This is the first event.' },
                { title: 'Event 2', date: '2024-03-20', description: 'This is the second event.' },
                { title: 'Event 3', date: '2024-03-25', description: 'This is the third event.' },
              ].map((event, index) => (
                <Card key={index} className="event-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-stone-600 dark:text-stone-400">{event.date}</p>
                    <p className="text-stone-600 dark:text-stone-400">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* <div className="marquee overflow-hidden whitespace-nowrap group">
          <div className="animate-marquee text-white/90  text-4xl font-bold tracking-wider py-5 flex space-x-10">
            <span>Ranked #1  in the country.</span>

            <span>95% job placement rate.</span>
            <span>$1 Million in Scholarships Awards.</span>
          </div>
        </div> */}

        {/* marquee section */}
        <section className="py-5">
          <div className="wrapper text-7xl font-bold tracking-wider">
            <span className="itemLeft item1">Ranked #1 in the Country.</span>
            <span className="itemLeft item2">$1 Million in Scholarships.</span>
            <span className="itemLeft item3">95% job placement rate.</span>
            <span className="itemLeft item4">99% satisfaction rate.</span>
          </div>
        </section>

        <section className="achievements pt-20 bg-slate-200 dark:bg-stone-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold bg-slate-950 py-2 rounded-md text-center mb-12">Achievements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((achievement, index) => (
                <Card key={index} className="achievement-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Achievement {achievement}</h3>
                    <p className="text-stone-600 dark:text-stone-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/*  */}
        <section className="testimonials py-20 bg-slate-200 dark:bg-stone-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold bg-slate-950 py-2 rounded-md text-center mb-12">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'John Doe', testimonial: 'This portal has been a game-changer for me. I can easily access my grades and course materials.' },
                { name: 'Jane Doe', testimonial: 'I love how user-friendly the portal is. It\'s so easy to navigate and find what I need.' },
                { name: 'Bob Smith', testimonial: 'The portal has really helped me stay organized and on top of my coursework.' },
              ].map((testimonial, index) => (
                <Card key={index} className="testimonial-card">
                  <CardContent className="p-6">
                    <p className="text-stone-600 dark:text-stone-400">{testimonial.testimonial}</p>
                    <p className="text-stone-900 dark:text-stone-50 mt-2">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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