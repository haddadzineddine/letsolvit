import { Resource, TopicResource } from "../types/Resource";

export const correspondingDifficultyColor: { [id: string]: string } = {
    "easy": "green",
    "medium": "orange",
    "hard": "red"
};

export const numberOfCompleted = (topicResources: TopicResource[]) => topicResources.filter((resource) => resource.isCompleted).length;

export const getProgress = (resource: Resource, id: string) => {
    const topicResources = resource[id] || [];
    return (numberOfCompleted(topicResources) / topicResources.length) * 100;
}

