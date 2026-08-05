import {
  Flame,
  ShieldCheck,
  Smile,
  Handshake,
  Brain,
  Compass,
  Crown,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

export type Category = {
  key: string
  label: string
  icon: LucideIcon
  score: number
  trend: number
  blurb: string
}

export const overallScore = 82

export const categories: Category[] = [
  { key: 'interest', label: 'Interest', icon: Flame, score: 88, trend: 6, blurb: 'She is asking follow-up questions and mirroring your energy.' },
  { key: 'confidence', label: 'Confidence', icon: ShieldCheck, score: 79, trend: 4, blurb: 'Clear, direct statements. A little over-explaining in two spots.' },
  { key: 'humor', label: 'Humor', icon: Smile, score: 84, trend: 9, blurb: 'Playful teasing landed well and raised the tension.' },
  { key: 'respect', label: 'Respect', icon: Handshake, score: 91, trend: 2, blurb: 'Warm, considerate tone throughout the exchange.' },
  { key: 'eq', label: 'Emotional IQ', icon: Brain, score: 76, trend: -3, blurb: 'Missed one emotional bid — she hinted at a hard week.' },
  { key: 'curiosity', label: 'Curiosity', icon: Compass, score: 81, trend: 5, blurb: 'Good open questions, could go one layer deeper.' },
  { key: 'leadership', label: 'Leadership', icon: Crown, score: 73, trend: 7, blurb: 'You proposed a plan but left the timing vague.' },
  { key: 'flirting', label: 'Flirting', icon: Sparkles, score: 86, trend: 11, blurb: 'Strong subtext. Confident without being try-hard.' },
]

export type Mistake = {
  id: string
  title: string
  explanation: string
  impact: 'High' | 'Medium' | 'Low'
  difficulty: 'Easy' | 'Moderate' | 'Hard'
}

export const mistakes: Mistake[] = [
  {
    id: 'm1',
    title: 'You double-texted after 4 minutes',
    explanation:
      'Sending a second message before she replied signals lower status and higher investment. Give the conversation room to breathe — a small silence builds anticipation.',
    impact: 'High',
    difficulty: 'Easy',
  },
  {
    id: 'm2',
    title: 'Over-explained your weekend plans',
    explanation:
      'Three sentences where one would do. Long justifications read as seeking approval. Trim to the confident version: state it, do not defend it.',
    impact: 'Medium',
    difficulty: 'Moderate',
  },
  {
    id: 'm3',
    title: 'Missed an emotional bid',
    explanation:
      'She mentioned a "long week" and you pivoted to logistics. Acknowledging feelings before moving on deepens connection and trust.',
    impact: 'High',
    difficulty: 'Moderate',
  },
  {
    id: 'm4',
    title: 'Ended on a closed question',
    explanation:
      'A yes/no question caps momentum. Open loops keep the thread alive and give her something easy and fun to respond to.',
    impact: 'Medium',
    difficulty: 'Easy',
  },
  {
    id: 'm5',
    title: 'No clear next step',
    explanation:
      'The conversation was warm but never converted. When interest is high, propose a specific, low-pressure plan to move things forward.',
    impact: 'High',
    difficulty: 'Hard',
  },
]

export type Strength = {
  id: string
  title: string
  detail: string
}

export const strengths: Strength[] = [
  { id: 's1', title: 'Playful teasing', detail: 'Your light challenge created attraction without any risk of offense.' },
  { id: 's2', title: 'Great timing on humor', detail: 'You broke tension at exactly the right moment and she matched it.' },
  { id: 's3', title: 'Warm, secure tone', detail: 'Consistently respectful energy makes you feel safe to talk to.' },
  { id: 's4', title: 'Strong opener', detail: 'Your first message referenced a shared detail — instantly personal.' },
]

export type ReplyStyle = 'funny' | 'confident' | 'romantic' | 'mysterious' | 'natural'

export const replies: Record<ReplyStyle, string> = {
  funny:
    "Okay but if this long week were a movie, what genre are we talking — thriller, comedy, or slow-burn drama? I need to know how worried to be.",
  confident:
    "Sounds like you've earned a proper reset. I'm taking you somewhere Thursday that fixes long weeks. Wear something you can walk in.",
  romantic:
    "You've been carrying a lot this week. Let me take one thing off your plate — dinner, my treat, and you don't have to think about a single thing.",
  mysterious:
    "Long week, huh. I might have exactly the thing for that… but I'm not telling you what it is yet. Thursday. Trust me.",
  natural:
    "Ugh, those weeks are the worst. What's one thing that actually made you smile today? And are you free Thursday to properly unwind?",
}

export type Insight = {
  key: string
  label: string
  value: number
  valueLabel: string
  from: string
  to: string
}

export const insights: Insight[] = [
  { key: 'ghost', label: 'Ghosting probability', value: 18, valueLabel: '18%', from: '#22C55E', to: '#4ADE80' },
  { key: 'date', label: 'Date probability', value: 74, valueLabel: '74%', from: '#FF6B57', to: '#FF9A7A' },
  { key: 'momentum', label: 'Conversation momentum', value: 81, valueLabel: 'High', from: '#FF6B57', to: '#FF9A7A' },
  { key: 'energy', label: 'Energy balance', value: 62, valueLabel: '62/38', from: '#6366F1', to: '#818CF8' },
  { key: 'invest', label: 'Investment balance', value: 55, valueLabel: 'Even', from: '#22C55E', to: '#4ADE80' },
  { key: 'timing', label: 'Response timing', value: 88, valueLabel: 'Great', from: '#F59E0B', to: '#FBBF24' },
]

export const aiSummary =
  "This conversation is going well. She's showing clear interest through mirrored energy and follow-up questions, and your humor is creating genuine attraction. Your biggest opportunity is emotional attunement — she opened a door you walked past. Acknowledge her week, then confidently propose a specific plan. The window to convert this into a date is open now; momentum is high and dropping slightly after 48 hours."

export type HistoryEntry = {
  id: string
  title: string
  contact: string
  score: number
  date: string
  tag: 'Crush' | 'Partner' | 'Coworker' | 'Friend'
  trend: number
}

export const history: HistoryEntry[] = [
  { id: 'h1', title: 'Coffee date follow-up', contact: 'Maya', score: 82, date: 'Today', tag: 'Crush', trend: 6 },
  { id: 'h2', title: 'Weekend plans thread', contact: 'Maya', score: 76, date: 'Yesterday', tag: 'Crush', trend: -2 },
  { id: 'h3', title: 'Re-engaging after silence', contact: 'Jordan', score: 68, date: '3 days ago', tag: 'Crush', trend: 12 },
  { id: 'h4', title: 'Salary negotiation DM', contact: 'Priya', score: 91, date: '5 days ago', tag: 'Coworker', trend: 4 },
  { id: 'h5', title: 'Planning the trip', contact: 'Sam', score: 88, date: '1 week ago', tag: 'Partner', trend: 3 },
  { id: 'h6', title: 'First message experiment', contact: 'Alex', score: 71, date: '2 weeks ago', tag: 'Crush', trend: 8 },
]

export const profile = {
  name: 'Daniel Reyes',
  handle: '@danielr',
  level: 12,
  xp: 2840,
  xpToNext: 3200,
  totalAnalyses: 47,
  streak: 9,
}

export const achievements = [
  { id: 'a1', title: 'First Analysis', desc: 'Completed your first report', unlocked: true, icon: Sparkles },
  { id: 'a2', title: 'Smooth Operator', desc: 'Scored 85+ on a conversation', unlocked: true, icon: Flame },
  { id: 'a3', title: '7-Day Streak', desc: 'Analyzed 7 days in a row', unlocked: true, icon: Crown },
  { id: 'a4', title: 'Ghost Buster', desc: 'Revived a dead conversation', unlocked: true, icon: ShieldCheck },
  { id: 'a5', title: 'Master Communicator', desc: 'Reach level 20', unlocked: false, icon: Brain },
  { id: 'a6', title: 'Perfect Score', desc: 'Score 100 on a conversation', unlocked: false, icon: Compass },
]

export const scoreEvolution = [
  { month: 'Jan', score: 58 },
  { month: 'Feb', score: 61 },
  { month: 'Mar', score: 64 },
  { month: 'Apr', score: 63 },
  { month: 'May', score: 70 },
  { month: 'Jun', score: 74 },
  { month: 'Jul', score: 78 },
  { month: 'Aug', score: 82 },
]
