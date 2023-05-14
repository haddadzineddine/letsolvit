import { Resource, TopicResource } from "../types/Resource";
import { resources } from "../data/resources";
import { topicsTitle } from "../data/topics";

export class TopicService {

    public static completion_key = (id: string): string => ("complete " + id);
    public static favorite_key = (id: string): string => ("favorite " + id);

    public static getTitle = (id: string): string => {
        return topicsTitle[id];
    };

    public static getResources = (): Resource => {
        Object.keys(resources).forEach((id: string) => {
            resources[id].forEach((resource: TopicResource) => {
                resource.start = TopicService.isFavorite(resource.problem);
                resource.isCompleted = TopicService.isCompleted(resource.problem);
            });
        });

        return resources;
    }


    public static getResoucesOfTopic = (id: string): TopicResource[] => {
        return resources[id] || [];
    };

    public static getHeaders = (): string[] => {
        return [
            "Status",
            "Start",
            "Problem",
            "Video Solution",
            "Difficulty",
            "Code"
        ];
    };

    public static toggleFavorite = (id: string): void => {
        TopicService.isFavorite(id) ? TopicService.unfavorite(id) : TopicService.favorite(id);
    }

    public static favorite = (id: string): void => {
        localStorage.setItem(TopicService.favorite_key(id), "true");
    };

    public static unfavorite = (id: string): void => {
        localStorage.removeItem(TopicService.favorite_key(id));
    };

    public static isFavorite = (id: string): boolean => {
        return localStorage.getItem(TopicService.favorite_key(id)) === "true";
    };

    public static toggleComplete = (id: string): void => {
        TopicService.isCompleted(id) ? TopicService.uncomplete(id) : TopicService.complete(id);
    }

    public static complete = (id: string): void => {
        localStorage.setItem(TopicService.completion_key(id), "true");
    }

    public static uncomplete = (id: string): void => {
        localStorage.removeItem(TopicService.completion_key(id));
    }

    public static isCompleted = (id: string): boolean => {
        return localStorage.getItem(TopicService.completion_key(id)) === "true";
    }
}
