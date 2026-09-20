import { useEffect, useState } from "react";
import { Linkedin, Twitter } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import managementTeamAsset from "@/assets/infodot-management-team.jpg.asset.json";

interface TeamMember {
  id: string;
  name: string;
  role: string | null;
  avatar: string | null;
  bio: string | null;
  linkedin: string | null;
  twitter: string | null;
}

export const TeamProfiles = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [groupPhoto, setGroupPhoto] = useState(managementTeamAsset.url);

  useEffect(() => {
    const fetchTeam = async () => {
      const [teamResult, photoResult] = await Promise.all([
        supabase.rpc("get_public_team_members"),
        supabase.from("site_settings").select("value").eq("key", "management_team_photo").maybeSingle(),
      ]);

      if (!teamResult.error && teamResult.data) {
        setTeam(teamResult.data as TeamMember[]);
      }

      if (!photoResult.error && typeof photoResult.data?.value === "string" && photoResult.data.value) {
        setGroupPhoto(photoResult.data.value);
      }
      setLoading(false);
    };

    fetchTeam();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background" aria-labelledby="management-team-heading">
      <div className="container-custom">
        <div className="mb-10 max-w-3xl animate-slide-up">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Leadership</p>
          <h2 id="management-team-heading" className="font-display text-3xl md:text-5xl font-bold leading-[1.1]">
            Management <span className="text-primary">Team</span>
          </h2>
        </div>

        <div className={team.length > 0 ? "grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-start" : ""}>
          <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] animate-slide-up">
            <img
              src={groupPhoto}
              alt="Infodot management team"
              className="aspect-[3/2] w-full object-cover object-center"
            />
          </figure>

          {loading ? (
            <div className="space-y-4" aria-label="Loading management profiles">
              {[0, 1, 2].map((item) => (
                <div key={item} className="h-28 animate-pulse rounded-2xl border border-border bg-secondary" />
              ))}
            </div>
          ) : team.length > 0 ? (
            <div className="divide-y divide-border border-y border-border animate-slide-up">
              {team.map((member, index) => (
                <article key={member.id} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-4">
                    {member.avatar && (
                      <img src={member.avatar} alt="" className="h-14 w-14 flex-none rounded-full object-cover" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="mb-2 text-xs font-bold text-primary">{String(index + 1).padStart(2, "0")}</p>
                      <h3 className="font-display text-xl font-bold">{member.name}</h3>
                      {member.role && <p className="mt-1 text-sm font-semibold text-primary">{member.role}</p>}
                      {member.bio && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>}
                      {(member.linkedin || member.twitter) && (
                        <div className="mt-4 flex gap-2">
                          {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`} className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                              <Linkedin className="h-4 w-4" />
                            </a>
                          )}
                          {member.twitter && (
                            <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on X`} className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                              <Twitter className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
