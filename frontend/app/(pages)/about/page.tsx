import { Section } from '@/components/Section'
import { Metadata } from 'next';
import React from 'react'

type Props = {}

export const metadata: Metadata = {
  title: "About Me | Portfolio",
  description: "About",
};

export default function About(props: Props) {
  return (
    <Section>
      <>
        <h1>About Me</h1>
      </>
    </Section>
  )
}