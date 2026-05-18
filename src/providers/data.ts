import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";

const mockSubjects = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description: "Foundational concepts in algorithms, programming, and computation for first-year students.",
        createdAt: "2026-05-16T08:00:00.000Z",
    },
    {
        id: 2,
        code: "MATH240",
        name: "Linear Algebra and Differential Equations",
        department: "Mathematics",
        description: "Core techniques in matrices, vector spaces, and ordinary differential equations for engineering and science majors.",
        createdAt: "2026-05-16T08:00:00.000Z",
    },
    {
        id: 3,
        code: "HIST212",
        name: "Modern World History",
        department: "History",
        description: "A survey of global developments, movements, and transformations from the 18th century to the present.",
        createdAt: "2026-05-16T08:00:00.000Z",
    },
];

export const dataProvider: DataProvider = {
    getList: async <TData extends BaseRecord = BaseRecord>({ resource }: GetListParams): Promise<GetListResponse<TData>> => {
        if (resource !== 'subjects') {
            return { data: [] as TData[], total: 0 };
        }

        return {
            data: mockSubjects as unknown as TData[],
            total: mockSubjects.length,
        };
    },

    getOne: async () => { throw new Error('This function is not present in mock') },
    create: async () => { throw new Error('This function is not present in mock') },
    update: async () => { throw new Error('This function is not present in mock') },
    deleteOne: async () => { throw new Error('This function is not present in mock') },

    getApiUrl: () => '',
};