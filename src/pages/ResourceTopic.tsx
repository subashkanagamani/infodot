import { useParams, Navigate } from "react-router-dom";
import { ResourceDocLayout } from "@/components/ResourceDocLayout";
import { getPillar, getArticle, getChildren } from "@/data/resources";
import { getGuide } from "@/data/guides";
import GuideDetail from "@/pages/GuideDetail";

export default function ResourceTopic() {
  const { pillar, article } = useParams();

  if (article) {
    const parent = getPillar(pillar);
    const doc = getArticle(pillar, article);
    if (!doc || !parent) return <Navigate to="/resources" replace />;
    return <ResourceDocLayout doc={doc} parent={parent} />;
  }

  const doc = getPillar(pillar);
  if (doc) return <ResourceDocLayout doc={doc} children={getChildren(doc.slug)} />;

  // Legacy downloadable guides also live at /resources/:slug
  if (getGuide(pillar)) return <GuideDetail slugOverride={pillar} />;

  return <Navigate to="/resources" replace />;
}
