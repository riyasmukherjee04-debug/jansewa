import { useState } from "react";
import { UserProfile, INDIAN_STATES, Gender, Category, Occupation, Education } from "@/data/schemes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProfileFormProps {
  onSubmit: (profile: UserProfile) => void;
  initialProfile?: UserProfile;
}

const ProfileForm = ({ onSubmit, initialProfile }: ProfileFormProps) => {
  const [age, setAge] = useState(initialProfile?.age?.toString() || "");
  const [gender, setGender] = useState<Gender>(initialProfile?.gender || "male");
  const [state, setState] = useState(initialProfile?.state || "");
  const [income, setIncome] = useState(initialProfile?.income?.toString() || "");
  const [occupation, setOccupation] = useState<Occupation>(initialProfile?.occupation || "salaried");
  const [category, setCategory] = useState<Category>(initialProfile?.category || "general");
  const [education, setEducation] = useState<Education>(initialProfile?.education || "graduate");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ageNum = parseInt(age);
    const incomeNum = parseInt(income);
    if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) return;
    if (isNaN(incomeNum) || incomeNum < 0) return;
    if (!state) return;
    onSubmit({ age: ageNum, gender, state, income: incomeNum, occupation, category, education });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input id="age" type="number" placeholder="e.g. 25" value={age} onChange={(e) => setAge(e.target.value)} min={1} max={120} required />
      </div>

      <div className="space-y-2">
        <Label>Gender</Label>
        <Select value={gender} onValueChange={(v) => setGender(v as Gender)}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>State</Label>
        <Select value={state} onValueChange={setState}>
          <SelectTrigger><SelectValue placeholder="Select state" /></SelectTrigger>
          <SelectContent>
            {INDIAN_STATES.map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="income">Annual Income (₹)</Label>
        <Input id="income" type="number" placeholder="e.g. 300000" value={income} onChange={(e) => setIncome(e.target.value)} min={0} required />
      </div>

      <div className="space-y-2">
        <Label>Occupation</Label>
        <Select value={occupation} onValueChange={(v) => setOccupation(v as Occupation)}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="farmer">Farmer</SelectItem>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="business">Business Owner</SelectItem>
            <SelectItem value="salaried">Salaried Employee</SelectItem>
            <SelectItem value="self-employed">Self Employed</SelectItem>
            <SelectItem value="unemployed">Unemployed</SelectItem>
            <SelectItem value="homemaker">Homemaker</SelectItem>
            <SelectItem value="retired">Retired</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Category</Label>
        <Select value={category} onValueChange={(v) => setCategory(v as Category)}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General</SelectItem>
            <SelectItem value="obc">OBC</SelectItem>
            <SelectItem value="sc">SC</SelectItem>
            <SelectItem value="st">ST</SelectItem>
            <SelectItem value="ews">EWS</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Education</Label>
        <Select value={education} onValueChange={(v) => setEducation(v as Education)}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No Formal Education</SelectItem>
            <SelectItem value="primary">Primary (1-5)</SelectItem>
            <SelectItem value="secondary">Secondary (6-10)</SelectItem>
            <SelectItem value="higher-secondary">Higher Secondary (11-12)</SelectItem>
            <SelectItem value="graduate">Graduate</SelectItem>
            <SelectItem value="post-graduate">Post Graduate</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-end">
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
          🔍 Find My Schemes
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
